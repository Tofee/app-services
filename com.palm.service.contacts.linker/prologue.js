// @@@LICENSE
//
//      Copyright (c) 2009-2013 LG Electronics, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// LICENSE@@@

/*jslint white: true, onevar: true, undef: true, eqeqeq: true, plusplus: true, bitwise: true, 
regexp: true, newcap: true, immed: true, nomen: false, maxerr: 500 */
/*global IMPORTS, console, require:true, process */

var Foundations = IMPORTS.foundations,
	_ = IMPORTS.underscore._,
	ContactsLib,
	Person,
	Contact,
	ContactLinkable,
	PersonFactory,
	ContactFactory,
	Name,
	EmailAddress,
	PhoneNumber,
	IMAddress,
	ContactPluralField,
	DB = Foundations.Data.DB,
	PalmCall = Foundations.Comms.PalmCall,
	Future = Foundations.Control.Future,
	ContactsUtils,
	Assert = Foundations.Assert,
	IO = IMPORTS["foundations.io"],
	TimingRecorder;

if (typeof require === "undefined") {
	require = IMPORTS.require;
}

//var console.log = require('pmloglib');
	
var SUPER_TOTALLY_AWESOME_DEBUG_MESSAGES = false;
var RECORD_TIMINGS_FOR_SPEED = false;

var Console = {};

Console.log = function (message) {
	if (SUPER_TOTALLY_AWESOME_DEBUG_MESSAGES) {
		console.log(message);
	}
};

Console.willDisplay = function () {
	return SUPER_TOTALLY_AWESOME_DEBUG_MESSAGES;
};

