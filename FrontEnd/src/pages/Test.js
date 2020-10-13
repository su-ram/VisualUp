import React from 'react';
import { MakeGraph } from "../components";

export default function Test(){
    return (
        <div className="test-graph">
            <MakeGraph
                goalId = "goal144"
                width = "500"
                height = "300"
            />
        </div>
    );
}