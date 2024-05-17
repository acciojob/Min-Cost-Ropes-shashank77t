function mincost(arr)
{ 
	const ab=arr.reduce((item,sum)=>{
		sum+=item;
		return sum;
	},0);
	return ab;
}

module.exports=mincost;
