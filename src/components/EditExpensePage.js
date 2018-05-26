import React from 'react';

const EditExpensePage = (props)=>(
    <div>
        {console.log(props)}
        This is from edit expense page for id {props.match.params.id}
    </div>
);

export default EditExpensePage;