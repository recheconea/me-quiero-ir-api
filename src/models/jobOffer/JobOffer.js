"use strict";

var jobTypes = ["F", "P", "T"]

function JobOffer() {
	this.id = "";
	this.companyId = 0;
	this.jobOfferId = "";
	this.title = "";
	this.creationDate = new Date();
	this.description = "";
	this.required = [];
	this.desired = [];
	this.grossSalary = 0;
	this.benefits = [];
	this.jobType = "F";
	this.expirationDate = "";
}

JobOffer.prototype.getId = function() {
	return this.id;
}

JobOffer.prototype.getCompanyId = function() {
	return this.companyId;
}

JobOffer.prototype.getJobOfferId = function() {
	return this.jobOfferId;
}

JobOffer.prototype.getTitle = function() {
	return this.title;
}

JobOffer.prototype.getCreationDate = function() {
	return this.creationDate;
}

JobOffer.prototype.getDescription = function() {
	return this.description;
}

JobOffer.prototype.getRequired = function() {
	return this.required;
}

JobOffer.prototype.getDesired = function() {
	return this.desired;
}

JobOffer.prototype.getGrossSalary = function() {
	return this.grossSalary;
}

JobOffer.prototype.getBenefits = function() {
	return this.benefits;
}

JobOffer.prototype.getJobType = function() {
	return this.jobType;
}

JobOffer.prototype.getExpirationDate = function() {
	return this.expirationDate;
}

JobOffer.prototype.setId = function(id) {
	this.id = id;
}

JobOffer.prototype.setCompanyId = function(companyId) {
	this.companyId = companyId;
}

JobOffer.prototype.setJobOfferId = function(jobOfferId) {
	this.jobOfferId = jobOfferId;
}

JobOffer.prototype.setTitle = function(title) {
	this.title = title;
}

JobOffer.prototype.setCreationDate = function(creationDate) {
	this.creationDate = creationDate;
}

JobOffer.prototype.setDescription = function(description) {
	this.description = description;
}

JobOffer.prototype.setRequired = function(required) {
	if (required.constructor === Array) {
		this.required = required;
	}
}

JobOffer.prototype.setDesired = function(desired) {
	if (desired.constructor === Array) {
		this.desired = desired;
	}
}

JobOffer.prototype.setGrossSalary = function(grossSalary) {
	this.grossSalary = grossSalary;
}

JobOffer.prototype.setBenefits = function(benefits) {
	if (benefits.constructor === Array) {
		this.benefits = benefits;
	}
}

JobOffer.prototype.setJobType = function(jobType) {
	if (jobTypes.indexOf(jobType) >= 0) {
		this.jobType = jobType;
	}
}

JobOffer.prototype.setExpirationDate = function(expirationDate) {
	this.expirationDate = expirationDate;
}

module.exports = JobOffer;