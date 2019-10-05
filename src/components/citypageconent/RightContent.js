import React, { Component } from "react";
import { connect } from "react-redux";

class RightContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bodydata: "sdckdscjscjsj",
      imageurl: "ALT"
    };
  }
  componentDidMount() {
    console.log("getCityDetailsReducer", this.props.getCityDetailsReducer);
    this.props.getCityDetailsReducer.map(gcrd => {
      console.log("values mmmmm", gcrd.majorplace);
      if (gcrd.majorplace == this.props.currenttab) {
        this.setState({ bodydata: gcrd.bodydata });
        this.setState({ imageurl: gcrd.imageurl });
      }
    });
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("nextProps", nextProps);

    this.props.getCityDetailsReducer.map(gcrd => {
      console.log("values mmmmm", gcrd.majorplace);
      if (gcrd.majorplace == nextProps.currenttab) {
        this.setState({ bodydata: gcrd.bodydata });
        this.setState({ imageurl: gcrd.imageurl });

        console.log("componet will recive prop", gcrd.bodydata);
      }
    });
  }
  render() {
    return (
      <div>
        {this.props.currenttab}||
        {this.state.bodydata}
        <img
          style={{ width: 600, height: 500 }}
          src={this.state.imageurl}
          alt="new"
        />
        {this.props.currenttab == "History" ? (
          <div>
            <p>
              A discovery of Stone Age artefacts during the 2001 census of India
              at Jalahalli, Sidhapura and Jadigenahalli, all of which are
              located on Bangalore's outskirts today, suggest probable human
              settlement around 4,000 BCE.[33] Around 1,000 BCE (Iron Age),
              burial grounds were established at Koramangala and Chikkajala on
              the outskirts of Bangalore. Coins of the Roman emperors Augustus,
              Tiberius, and Claudius found at Yeswanthpur and HAL indicate that
              the region was involved in trans-oceanic trade with the Romans and
              other civilizations in 27 BCE.[34] The region of modern-day
              Bangalore was part of several successive South Indian kingdoms.
              Between the fourth and the tenth centuries, the Bangalore region
              was ruled by the Western Ganga Dynasty of Karnataka, the first
              dynasty to set up effective control over the region.[35] According
              to Edgar Thurston[36] there were twenty-eight kings who ruled
              Gangavadi from the start of the Christian era until its conquest
              by the Cholas. These kings belonged to two distinct dynasties: the
              earlier line of the Solar race which had a succession of seven
              kings of the Ratti or Reddi tribe, and the later line of the Ganga
              race. The Western Gangas ruled the region initially as a sovereign
              power (350–550), and later as feudatories of the Chalukyas of
              Badami, followed by the Rashtrakutas until the tenth century.[26]
              The Begur Nageshwara Temple was commissioned around 860, during
              the reign of the Western Ganga King Ereganga Nitimarga I and
              extended by his successor Nitimarga II.[37][38] Around 1004,
              during the reign of Raja Raja Chola I, the Cholas defeated the
              Western Gangas under the command of the crown prince Rajendra
              Chola I, and captured Bangalore.[37][39] During this period, the
              Bangalore region witnessed the migration of many groups —
              warriors, administrators, traders, artisans, pastorals,
              cultivators, and religious personnel from Tamil Nadu and other
              Kannada speaking regions.[35] The Chokkanathaswamy temple at
              Domlur, the Aigandapura complex near Hesaraghatta, Mukthi
              Natheshwara Temple at Binnamangala, Choleshwara Temple at Begur,
              Someshwara Temple at Madiwala, date from the Chola era.[37] In
              1117, the Hoysala king Vishnuvardhana defeated the Cholas in the
              Battle of Talakad in south Karnataka, and extended its rule over
              the region.[37] Vishnuvardhana expelled the Cholas from all parts
              of Mysore state.[40] By the end of the 13th century, Bangalore
              became a source of contention between two warring cousins, the
              Hoysala ruler Veera Ballala III of Halebidu and Ramanatha, who
              administered from the Hoysala held territory in Tamil Nadu.[37]
              Veera Ballala III had appointed a civic head at Hudi (now within
              Bangalore Municipal Corporation limits), thus promoting the
              village to the status of a town. After Veera Ballala III's death
              in 1343, the next empire to rule the region was the Vijayanagara
              Empire, which itself saw the rise of four dynasties, the Sangamas
              (1336–1485), the Saluvas (1485–1491), the Tuluvas (1491–1565), and
              the Aravidu (1565–1646).[41] During the reign of the Vijayanagara
              Empire, Achyuta Deva Raya of the Tuluva Dynasty raised the
              Shivasamudra Dam across the Arkavati river at Hesaraghatta, whose
              reservoir is the present city's supply of regular piped water.[42]
            </p>
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("state", state);
  return {
    currenttab: state.getNavReducer.currenttab,
    getCityDetailsReducer: state.getCityDetailsReducer
  };
};

export default connect(mapStateToProps)(RightContent);
