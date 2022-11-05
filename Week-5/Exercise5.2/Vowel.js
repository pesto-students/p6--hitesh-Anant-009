function isVowel(char)
{
  return"aeiou".includes(char);
}

function vowelCount(str)
{
  constvowelMap=newMap();
  for(let char of str)
  {
    letlowerCaseChar=char.toLowerCase()
      if(isVowel(lowerCaseChar)){
        if(vowelMap.has(lowerCaseChar)){
          vowelMap.set(lowerCaseChar,vowelMap.get(lowerCaseChar)+1);
        }
        else{
          vowelMap.set(lowerCaseChar,1);
        }
      }
  }
  returnvowelMap;
}
