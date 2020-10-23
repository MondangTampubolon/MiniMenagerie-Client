import React from "react";
import { Card } from "react-bootstrap";

import "./Skeleton.css";

const Skeleton = () => {
    return (

        <Card style={{ width: "20rem", marginBottom: "80px", marginLeft: "5px", marginRight: "5px", borderRadius: "10px" }}>
            <div style={{ padding: "10px" }}>
                <div className="skeleton-img" />
            </div>
            <Card.Body>
                <p className="skeleton-email" />
                <p className="skeleton-email" />
            </Card.Body>
        </Card>
    );
};

export default Skeleton;