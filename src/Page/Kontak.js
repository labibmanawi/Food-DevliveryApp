import React, { Component } from "react";
import Header from "./Header";
import "../Style/Kontak.css";


class Kontak extends Component {
    render() {
        return(
       
                <div id="kontak_bg">
                    <Header />
                    <div className="kontak">
                        <h3>
                            Jl. Swadaya IV,Pd.Ranggon, Cipayung, Jakarta Timur,DKI Jakarta.13312{""}
                        </h3>
                        <p>08821-2133-2131</p>
                    </div>
                </div>
    
        );
    }
}


export default Kontak;