// Class definition for creating a custom array-like data structure
class myCustomArray {
    constructor() {
        // Initial length of the custom array
        this.length = 0;
        // Object to hold array data
        this.data = {};
    }

    // Method to push an item into the custom array at the last index
    push(item) {
        // Set the value at the current length (next available index)
        this.data[this.length] = item;
        // Increment the length to reflect the new size of the array
        this.length++;
        // Return the new length of the array
        return this.length;
    }

    // Method to get an item from the array by its index
    get(index) {
        // Return the item at the specified index
        return this.data[index];
    }

    // Method to remove and return the last item in the array
    pop() {
        // Get the last item in the array
        const lastItem = this.data[this.length - 1];
        // Remove the last item from the array
        delete this.data[this.length - 1];
        // Decrease the length to reflect the removal of an item
        this.length--;
        // Return the removed item
        return lastItem;
    }

    // Method to remove and return the first item in the array
    shift() {
        // Get the first item in the array
        const firstItem = this.data[0];

        // Shift all items in the array one position to the left
        for (let i = 0; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }

        // Remove the last item since it has been shifted out of place
        delete this.data[this.length - 1];
        // Decrease the length to reflect the removal of an item
        this.length--;
        // Return the removed first item
        return firstItem;
    }

    // Method to delete an item at a specific index in the array
    deleteByIndex(index) {
        // Get the item at the specified index
        const item = this.data[index];

        // Shift items to the left starting from the specified index
        for (let i = index; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }

        // Remove the last item since it has been shifted out of place
        delete this.data[this.length - 1];
        // Decrease the length to reflect the removal of an item
        this.length--;
        // Return the deleted item
        return item;
    }
}

// Example usage of the custom array
const myNewArray = new myCustomArray();

// Adding items to the custom array
myNewArray.push("apple");
myNewArray.push("Banana");
myNewArray.push(true);
myNewArray.push(23);

// Removing the last item ("23") from the array
myNewArray.pop();

// Get the first item ("apple") from the array
console.log(myNewArray.get(0));

// Remove and return the first item ("apple") from the array
myNewArray.shift();

// Delete the item at index 2 (boolean value "true" after shifting)
myNewArray.deleteByIndex(2);

// Output the updated array structure
console.log(myNewArray);
