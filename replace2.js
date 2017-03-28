function spinalCase(str) {

    var ans = str.replace(/\s|_|[a-z]+[A-Z]/g, function(found) {
        if (found.length > 1) { // Then this is a word that starts with a capital letter in the middle of a sentence
            return found.substring(0, found.length - 1) + "-" + found[found.length - 1];
        } else {
            return "-";
        }
    });

    return ans.toLowerCase();
}

/*
spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things") should return "all-the-small-things".
*/