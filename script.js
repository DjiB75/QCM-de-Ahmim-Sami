let noteFinale = 0;

function reponse1(qst1) {
	if	((qst1.choix1.checked) === false && // Right Answer
		(qst1.choix2.checked) === true &&
		(qst1.choix3.checked) === false && 
		(qst1.choix4.checked) === false) 
		noteFinale += 2;

}

function reponse2(qst2) {
	if ((qst2.choix1.checked) === true && // Right Answer
		(qst2.choix2.checked) === false &&
		(qst2.choix3.checked) === false && 
		(qst2.choix4.checked) === false) 
		noteFinale += 2;

}

function reponse3(qst3) {
	if ((qst3.choix1.checked) === true && // Right Answer
		(qst3.choix2.checked) === false &&
		(qst3.choix3.checked) === false && 
		(qst3.choix4.checked) === false) 
		noteFinale += 2;

}
function reponse4(qst4) {
	if ((qst4.choix1.checked) === false &&
		(qst4.choix2.checked) === true && // Right Answer
		(qst4.choix3.checked) === false && 
		(qst4.choix4.checked) === false) 
		noteFinale += 2;

}
function reponse5(qst5) {
	if ((qst5.choix1.checked) === true && // Right Answer
		(qst5.choix2.checked) === false && 
		(qst5.choix3.checked) === false && 
		(qst5.choix4.checked) === false) 
		noteFinale += 2;

}

function reponse6(qst6) {
	if ((qst6.choix1.checked) === false && 
		(qst6.choix2.checked) === false && 
		(qst6.choix3.checked) === true && // Right Answer
		(qst6.choix4.checked) === false) 
		noteFinale += 2;

}

function reponse7(qst7) {
	if ((qst7.choix1.checked) === true && // Right Answer
		(qst7.choix2.checked) === false && 
		(qst7.choix3.checked) === false && 
		(qst7.choix4.checked) === false) 
		noteFinale += 2;

}

function reponse8(qst8) {
	if ((qst8.choix1.checked) === false && 
		(qst8.choix2.checked) === true && // Right Answer
		(qst8.choix3.checked) === false && 
		(qst8.choix4.checked) === false) 
		noteFinale += 2;
}

function reponse9(qst9) {
	if ((qst9.choix1.checked) === true && // Right Answer
		(qst9.choix2.checked) === false && 
		(qst9.choix3.checked) === false && 
		(qst9.choix4.checked) === false) 
		noteFinale += 2;
}

function reponse10(qst10) {
	if ((qst10.choix1.checked) === false && 
		(qst10.choix2.checked) === false && 
		(qst10.choix3.checked) === true && // Right Answer
		(qst10.choix4.checked) === false) 
		noteFinale += 2;
}

function validQCM() {
	reponse1(qst1);
	reponse2(qst2);
	reponse3(qst3);
	reponse4(qst4);
	reponse5(qst5);
	reponse6(qst6);
    reponse7(qst7);
	reponse8(qst8);
    reponse9(qst9);
	reponse10(qst10);
	alert("Votre score est de " + noteFinale + "/20");
}
