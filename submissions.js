// Copyright (c) 2007 Andrew Eisenberg
// Submission system for AOSD 2013 Industry track
// Redistributable under a BSD-style open source license.
// See http://www.linfo.org/bsdlicense.html

/*global $ document alert */

if ($) {
	$(document).ready(function() {
		// adds a new author to the author's list
		function addAuthor() {
			var cnt = $("table#authorsTable").find("tr").length + 1;
			$("table#authorsTable").append(
				"<tr>\n" +
				"\t<td class='authorWord' >Author " + cnt + ":</td>\n" + 
				"\t<td class='authorTitle'>Full Name:</td>\n" + 
				"\t<td class='authorText' ><textarea onchange='validateName(this.value, " + cnt + ")' cols='20' rows='1' id='name" + "cnt'/></td>\n" +
				"\t<td class='authorImg' id='authorNameImg'"+ cnt + "'></td>\n" + 
				"\t<td class='authorTitle'>Email:</td>\n" +
				"\t<td class='authorText' ><textarea onchange='validateEmail(this.value, " + cnt + ")' cols='20' rows='1' id='email" + "cnt'/></td>\n" +
				"\t<td class='authorImg' id='authorEmailImg'"+ cnt + "'></td>\n" + 
				"\t<td class='authorTitle'>Affiliation</td>\n" +
				"\t<td class='authorText' ><textarea onchange='validateAffiliation(this.value, " + cnt + ")' cols='20' rows='1' id='affiliation" + "cnt'/></td>\n" +
				"\t<td class='authorImg' id='authorAffiliationImg'"+ cnt + "'></td>\n" + 
				"</tr>");
			
		}
		function removeAuthor() {
			$("table#authorsTable").find("tr").last().detach();
		}
		
		function validateEmail(email, idx) {
			if (!email) {
				return "Must include a email";
			}
		}
		
		function validateName(name, idx) {
			if (!name) {
				return "Must include a name";
			}
		}
		
		function validateAffilation(affiliation, idx) {
			if (!affiliation) {
				return "Must include an affiliation";
			}
		}
		
		$("button#addAuthorButton").click(addAuthor);
		$("button#removeAuthorButton").click(removeAuthor);
		
		$("button#submit").click(function() { alert("Ain't doin nuthin"); });
	
		// first, add two authors
		addAuthor();
		addAuthor();
	});
}