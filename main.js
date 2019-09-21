function option(human) {
	var result_text = ['TIE','YOU WIN','YOU LOSE'];
	var names = ['Rock', 'Paper', 'Scissors'];

	cpu = Math.floor((Math.random() * 5)); // Obtains a random number for the CPU (0-4)

	match = [
			[0,1,2],
			[2,0,1],
			[1,2,0]
			];

	desc_match = [
					['Equal','Paper covers rock','Rock crushes scissors'],
					['Paper covers rock','Equal','Scissors cuts paper'],
					['Rock crushes scissors','Scissors cuts paper','Equal']
					];

	result = match[cpu][human]; // Stores the result of a match CPU vs Human

	var message1 = new SpeechSynthesisUtterance("Human chose " + names[human]);
	var message2 = new SpeechSynthesisUtterance("CPU chose " + names[cpu]);
	var message3 = new SpeechSynthesisUtterance(desc_match[cpu][human]);
	var message4= new SpeechSynthesisUtterance(result_text[result]);

	var synth = window.speechSynthesis; // Synthesizes a voice message w/ the text

	synth.speak(message1);
	synth.speak(message2);
	synth.speak(message3);
	synth.speak(message4);
}