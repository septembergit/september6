function collectSameElements (collectionA, collectionB) {
   var result = [],
       lenA = collectionA.length,
       lenB = collectionB.length;
   for (var i = 0; i < lenA; i++) {
   	   var selectedElements = SameElements(collectionA, i, collectionB, lenB-1);
   	   if (selectedElements === -1) {
   	   	continue;
   	   }
   	   else {
   	   	result.push(selectedElements);
   	   }
   }
   return result;
}
function SameElements (collectionA, i, collectionB, lenB) {
	if (lenB < 0) {
		return -1;
	}
	else{
		return (collectionA[i] === collectionB[lenB])? collectionA[i]:arguments.callee(collectionA, i, collectionB, --lenB);
	}
}
module.exports = collectSameElements;
