function mincost(arr)
{ 
	const ab=arr.reduce((sum,item)=>{
		sum+=item;
		return sum;
	},0);
	return ab;
}

module.exports=mincost;
