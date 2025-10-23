import React from "react";
import { Button } from "react-bootstrap";

export default function CategoryControls() {
    function createCategory() {
        //TODO
    }
    
    function renameCategory() {
        //TODO
    }
    
    function mergeCategory() {
        //TODO
    }

    return (
        <div className="card-body">
            <form>
                <h4>Category Controls</h4>
                <ul className="list-group list-group-flush">
                    {/* Create category */}
                    <li className="list-group-item">
                        <h6>Create Category:</h6>
                        <div className="row g-1">
                            <div className="col">
                                <input type="text" placeholder="Name" className="form-control"/>
                            </div>
                            <div className="col">
                                <Button variant="primary" onClick={createCategory}>Create</Button>
                            </div>
                        </div>
                    </li>
                    {/* Rename category */}
                    <li className="list-group-item">
                        <h6>Rename:</h6>
                        <select id="rename-dropdown" className="form-select mb-2">
                            <option>Tithing</option>
                            <option>Savings</option>
                            <option>Fun</option>
                        </select>
                        <div className="row g-1">
                            <div className="col">
                                <input type="text" placeholder="New Name" className="form-control"/>
                            </div>
                            <div className="col">
                                <Button variant="primary" onClick={renameCategory}>Rename</Button>
                            </div>
                        </div>
                    </li>
                    {/* Merge categories */}
                    <li className="list-group-item">
                        <h6>Merge:</h6>
                        <label htmlFor="merge-source">Source</label>
                        <select id="merge-source" className="form-select mb-2">
                            <option>Tithing</option>
                            <option>Savings</option>
                            <option>Fun</option>
                        </select>
                        <label htmlFor="merge-destination">Destination</label>
                        <select id="merge-destination" className="form-select mb-2">
                            <option>Tithing</option>
                            <option>Savings</option>
                            <option>Fun</option>
                        </select>
                        <Button variant="primary" onClick={mergeCategory}>Merge</Button>
                    </li>
                </ul>
            </form>
        </div>
    );
}