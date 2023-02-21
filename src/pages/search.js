import React from "react";
import "../style/search.css";
import "../style/util.css";
import ResultCard from "../components/resultCard";
export default function Search() {
    return (
    <div className="search-container flex flex-justify-center">
        <input className="" type="search"></input>
        <div className="search-result">

        </div>

    </div>)
}