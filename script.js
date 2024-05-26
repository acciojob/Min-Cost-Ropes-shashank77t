function mincost(arr)
{ 
	  let totalCost = 0;

    // Sort the array initially to easily pick the shortest ropes
    arr.sort((a, b) => a - b);

    // Continue until there's only one rope left
    while (arr.length > 1) {
        // Get the lengths of the two shortest ropes
        const shortest1 = arr.shift(); // Remove the shortest rope
        const shortest2 = arr.shift(); // Remove the new shortest rope after removal

        // Calculate the cost of connecting these two ropes
        const cost = shortest1 + shortest2;

        // Add the cost to the total
        totalCost += cost;

        // Put the connected rope back into the array
        // and maintain the sorted order
        arr.push(cost);
        arr.sort((a, b) => a - b);
    }

    return totalCost;
}

module.exports=mincost;
