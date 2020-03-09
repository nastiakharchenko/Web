function Abbreviation(_word)
{
    let word = _word.toUpperCase();
    let vowel = "AOEUI";
    let code = [];
    let count = 0;
    if(word.length >= 3)
    {
        for(let key in word)
        {
            for(let i in vowel)
            {
                if(word[key] == vowel[i])
                {
                    count++;
                    break;
                }
            }
            if(count == 0 && code.length < 3)
            {
                code.push(word[key]);
            }
            else
            {
                count = 0;
            }
        }
        if(code.length == 3)
        {
            return code[0] + code[1] + code[2];
        } 
        else
        {
            for(let key in word)
            {
                for(let i in vowel)
                {
                    if( (word[key] == vowel[i]) && (code.length < 3) )
                    {
                        code.push(word[key]);
                        break;
                    }    
                }
            }
            if(code.length == 3)
            {
                return code[0] + code[1] + code[2];
            } 
        }
    }
    /*Если длина имени меньше 3-х букв*/
    else
    {
        count = 0;
        //заполнение согласными
        for(let key in word)
        {
            for(let i in vowel)
            {
                if(word[key] == vowel[i])
                {
                    count++;
                    break;
                }
            }
            if(count == 0)
            {
                code.push(word[key]);
            }
            else
            {
                count = 0;
            }
        }
        //заполнение гласными:
        for(let key in word)
        {
            for(let i in vowel)
            {
                if( word[key] == vowel[i] )
                {
                    code.push(word[key]);
                    break;
                } 
            }
        }
        //дозаполнение Х
        while(code.length < 3)
        {
            code.push("X");
        } 
        return code[0] + code[1] + code[2];
    }
}
function Date(_date, _gender)
{
    let code = [];
    let date = _date.split('/');
    code = date[2][2] + date[2][3];
    const months = { 1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "H", 7: "L", 8: "M", 9: "P", 10: "R", 11: "S", 12: "T" };
    code = code + months[date[1]];
    if(_gender == "M")
    {
        if(date[0] < 10)
        {
            code = code + "0" + date[0];
        }
        else { code = code + date[0]; }
    }
    else
    {
        code = code + String((date[0] -1)+ 41);
    }
    return code;
}


let fiscalCode = {name:"", surname: "", gender: "", dob: ""};
fiscalCode.name = prompt("Name: ");
fiscalCode.surname = prompt("Surname: ");
fiscalCode.gender = prompt("Gender: ");
fiscalCode.dob = prompt("Dob: "); 

let result = Abbreviation(fiscalCode.surname) + Abbreviation(fiscalCode.name) + Date(fiscalCode.dob, fiscalCode.gender);
alert(result);