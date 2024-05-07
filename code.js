function binarySearch(list, element) {
    let start = 0;//first pointer
    let end = list.length-1;//second pointer
    while (start<=end) {
        let cent = Math.floor((start + end) / 2);//finds the middle index
        if (list[cent] === element) {//checks if the element is at the center of the index if true it checks to the left
            //if the element is not in the center it moves the start pointer to the center and check the right 
            while (cent > 0 && list[cent - 1] === element) {

                cent--;
            }

            return cent;
        }
        else if (list[cent] < element)
            start = cent + 1;
        else
            end = cent - 1;
    }
    return -1;
}
