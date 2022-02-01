function CreateObject(arr) {
    // Write your code here
    object_list={};
    for (var i=0; i<arr.length; i=i+2) {
        var key=arr[i];
        var value=arr[i+1];
        object_list[key]=value;
    }
    return object_list;

}

module.exports = CreateObject;
