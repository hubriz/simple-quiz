var init = {
    
    // Put all the QUESTIONS here..
    
    'questions': [{
        'question': 'What is the longest verse in the KJV New Testament&#63;',
        'answers': ['Revelations 20&#58;4', 'Esther 8&#58;9', 'John 3&#58;16', 'Psalm 83&#58;18'],
        'correctAnswer': 1
    }, {
        'question': 'Who was the first person to use the word "servant" in the Bible&#63;',
        'answers': ['Isaac', 'Esau', 'Moses', 'Noah'],
        'correctAnswer': 3
    }, {
        'question': 'Which book in the KJV Bible has the fewest words&#63;',
        'answers': ['2 Samuel', 'Ruth', 'Titus', '3 John'],
        'correctAnswer': 4
    },
    
    // Using the same structure above, fill all the questions with the given format
    
    
    
    ],
    'resultComments': {
        perfect: 'Albus, is that you?',
        excellent: 'Outstanding, noble sir!',
        good: 'Exceeds expectations!',
        average: 'Acceptable. For a muggle.',
        bad: 'Well, that was poor.',
        poor: 'Dreadful!',
        worst: 'Try it again.'
    }

};

$(function() {
    // Instantiate Quiz
    $('#main-quiz').jquizzy({
        questions: init.questions, 
		resultComments: init.resultComments,	
		twitterStatus: 'Woo! I got {score} on the quiz. Try it!'
    });
    
    // Prevent Ribbon effect to Hide   
    $('.title').wrap('<div class="wrapThis" />');
})