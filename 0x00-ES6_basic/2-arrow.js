//export default function getNeighborhoodsList() {
//	  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];
//
//	  const self = this;
//	  this.addNeighborhood = (newNeighborhood) => {
//		      self.sanFranciscoNeighborhoods.push(newNeighborhood);
//		      return self.sanFranciscoNeighborhoods;
//		    };
//}

//rewrite a function using arrow syntax
export default function getNeighborhoodsList() {
	this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

	this.addNeighborhood = (newNeighborhood) => {
		this.sanFranciscoNeighborhoods.push(newNeighborhood);
		return this.sanFranciscoNeighborhoods;
	};
}
