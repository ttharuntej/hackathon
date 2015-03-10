'use strict';

var eventsdb=require('../eventsdb');
var q=require('q');
var mailer=require('../mailer');
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AlertDefSchema = new Schema({
	module: String,
	usecase: String,
	dimension1: String,
	dimension2: String,
	dimension3: String,
	aggregateType: String,
	operator: String,
	duration: Number,
	treshold: Number,
	email:String
});

AlertDefSchema.methods.shouldAlert=function() {
	var query='SELECT ';
	if('sum'==this.aggregateType) {
		query=query + 'SUM';
	} else if('avg'==this.aggregateType) {
		query=query + 'AVG';
	}
	query=query+'(VALUE) as result FROM EVENTS WHERE ';
	if(this.module) {
		query=query+"MODULE='"+this.module+"' ";
	}
	if(this.usecase) {
		query=query+"AND usecase='"+this.usecase+"' ";
	}
	if(this.dimension1) {
		query=query+"AND dimension1='"+this.dimension1+"' ";
	}
	if(this.dimension2) {
		query=query+"AND dimension2='"+this.dimension2+"' ";
	}
	if(this.dimension3) {
		query=query+"AND dimension3='"+this.dimension3+"' ";
	}
	query=query+' AND EVENT_DATE BETWEEN ? AND ?';
	var op=this.operator;
	var tres=this.treshold;
	var now=new Date();
	var start=new Date(now.getTime()-(this.duration*1000));
	return eventsdb.executeQuery(query,[start,now]).then(function(result){
		var value=result[0].result;
		var alert=false;
		if(op=='gt') {
			if(value>tres) {
				alert=true;
			}
		}
		if(op=='lt') {
			if(value<tres) {
				alert=true;
			}
		}
		return [alert, result[0]];
	});

};
AlertDefSchema.methods.sendEmail=function(result) {
	 
	var mailoptions= {
		from:"no-reply@ebay.com",
		to:this.email,
		subject:this.getShortDescription()+" has  exceeded threshold",
		html: "<h1 style=\"color:#003366;font-family:\"Times New Roman\", Georgia, Serif;font-size:200%;\">Monitoring Service Report</h1>" +
			  "<TABLE  width='100%'> " + 
	                     "<TR bgcolor='#5C8AE6'> " +
	                         "<TD><font color='#FFFFFF'>Module</font></TD> " +
	                         "<TD><font color='#FFFFFF'>Usecase</font></TD> " +
	  					     "<TD><font color='#FFFFFF'>VALUE</font></TD> " +
	 						 "<TD width=\"50%\"><font color='#FFFFFF'>Description</font></TD>" +
	 
	                     "</TR> " +
	                     "<TR> " +
	                         "<TD>"+this.module+"</TD> " +
	                         "<TD>"+this.usecase+"</TD>  " +
	                         "<TD>"+result[1].result+"</TD>" +
							 "<TD>"+this.getShortDescription()+" has exeeded defined treshold "+this.treshold+" when perfromed "+this.aggregateType+" of values</TD>" +
	                      "</TR>" +
	                    "</TABLE>" +

	"<p> This is queried against database at "+ new Date()+" </p> " 

		//this.getShortDescription()+" has exeeded treshold "+this.treshold
	};
	console.log(mailoptions);
	var defer=q.defer();
	mailer.smtpTransport.sendMail(mailoptions, function(error, response){
        if(error){
    		defer.reject(error);
    		console.log("HTML ERROR"+ error)
        }else{
           defer.resolve(response);
           console.log("SUCESS")
        }
    });
    return defer.promise;
};
AlertDefSchema.methods.getShortDescription=function() {
	var shortdesc=this.module;
	if(this.usecase) {
		shortdesc=shortdesc+' '+this.usecase;
	}
	if(this.dimension1) {
		shortdesc=shortdesc+' '+this.dimension1;
	}
	if(this.dimension2) {
		shortdesc=shortdesc+' '+this.dimension2;
	}
	if(this.dimension3) {
		shortdesc=shortdesc+' '+this.dimension3;
	}
	return shortdesc;
};
console.log("im here sdfsd");
module.exports = mongoose.model('AlertDef', AlertDefSchema);
