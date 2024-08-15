document.getElementById('arrayForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Get the input value and convert it to an array of numbers
    const input = document.getElementById('arrayInput').value;
    let array = input.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));

    if (array.length === 0) {
        alert('Please enter a valid array of numbers.');
        return;
    }

    // Sort the array
    const sortedArray = [...array].sort((a, b) => a - b);

    // Reverse the array
    const reversedArray = [...array].reverse();

    // Slice the array (for demonstration, slice the first 3 elements)
    const slicedArray = array.slice(0, 3);

    // Stack and Queue operations
    const stack = [...array];
    const queue = [...array];
    const poppedElement = stack.pop();
    const dequeuedElement = queue.shift();

    // Math operations
    const maxVal = Math.max(...array);
    const minVal = Math.min(...array);
    const sqrtArray = array.map(num => Math.sqrt(num).toFixed(2)); // Rounded to 2 decimal places

    // Display results
    document.getElementById('sortedArray').textContent = `Sorted Array: ${sortedArray}`;
    document.getElementById('reversedArray').textContent = `Reversed Array: ${reversedArray}`;
    document.getElementById('slicedArray').textContent = `Sliced Array (first 3 elements): ${slicedArray}`;
    document.getElementById('stackQueueOperations').textContent = `Stack Operation (popped element): ${poppedElement}, Queue Operation (dequeued element): ${dequeuedElement}`;
    document.getElementById('mathOperations').textContent = `Max Value: ${maxVal}, Min Value: ${minVal}, Square Roots: ${sqrtArray}`;
});
