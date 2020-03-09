function distanceToVowel(word)
{
    let vowelArray = "aeiou";
    let len = word.length;
    let result = [];
    let consonants = [];
    let vowel = -1;
    for(let i = 0; i < len; i++)
    {
        for(let j = 0; j < vowelArray.length; j++)
        {
            if(word[i] == vowelArray[j])
            {
                vowel = 0;
                break;
            }
        }
        if(vowel == 0)
        {
            vowel = -1;
            if(consonants.length == 0)
            {
                result.push(0);
                continue;
            }
            else if(result[result.length - 1] == 0)
            {
                for(let k = 0; k < consonants.length; k++)
                {
                    if(k < Math.floor(consonants.length / 2))
                    {
                        result.push(k+1);  
                    }
                    else
                    {
                        result.push(consonants.length - k);
                    } 
                }
            }
            else
            {
                for(let k = 0; k < consonants.length; k++)
                {
                    result.push(consonants.length - k); 
                }
            }
            result.push(0);
            consonants = [];
        }
        else
        {
            consonants.push(1);
        }
    }
    if(consonants.length != 0)
    {
        for(let k = 0; k < consonants.length; k++)
        {
            result.push(k+1);
        }
    }
    alert(result);
}

let arr = prompt('Введіть рядок: ', );
distanceToVowel(arr.toLowerCase());