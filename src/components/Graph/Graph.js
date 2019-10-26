import React from 'react';
import PropTypes from 'prop-types';

import Node from './Node/Node';
import Edge from './Edge/Edge';

const graph = (props) => {
	const { nodes, edges } = props;

	let nodesHash = {};

	nodes.forEach(node => {
		nodesHash[node.label] = {...node};
	})

	return (
		<div>
			{nodes.map((node, idx) => <Node key={idx} label={node.label} x={node.x} y={node.y} size={30} color='red'/>)}}
			{edges.map((edge, idx) => <Edge key={idx} 
				p1={{ x: nodesHash[edge.labelNode1].x, y: nodesHash[edge.labelNode1].y }}
				p2={{ x: nodesHash[edge.labelNode2].x, y: nodesHash[edge.labelNode2].y }}/>)}
		</div>
	)
}

graph.propTypes = {
	nodes: PropTypes.arrayOf(
		PropTypes.shape({ x: PropTypes.number, y: PropTypes.number, label: PropTypes.oneOf([PropTypes.number, PropTypes.string]) })
	),
	edges: PropTypes.arrayOf(
		PropTypes.shape({
			labelNode1: PropTypes.string,
			labelNode2: PropTypes.string
		})
	)
}
export default graph;
