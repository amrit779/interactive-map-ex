import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  dataSource: Object;
  title: string;
  chartInstance: any = {};

  initialized(e) {
    this.chartInstance = e.chart;
    this.chartInstance.configureLink(
      {
        type: "uttarpradesh",
        overlayButton: {
          message: "close",
          fontColor: "880000",
          bgColor: "FFEEEE",
          borderColor: "660000"
        }
      },
      0
    );
    // Configure the drill down chart
    // this.chartInstance.configureLink({
    //   type: "usa",
    //   width: "100%",
    //   overlayButton: {
    //     message: "Back",
    //     fontColor: "880000",
    //     bgColor: "FFEEEE",
    //     borderColor: "660000"
    //   }
    // });
  }

  constructor() {
    this.title = "Angular  FusionCharts Sample";

    this.dataSource = {
      chart: {
        bgColor: "#FFFFFF",
        bgAlpha: "0",
        animation: "0",
        showLabels: "1",
        usehovercolor: "1",
        canvasbordercolor: "FFFFFF",
        bordercolor: "#b3ffff",
        showlegend: "1",
        showshadow: "0",
        legendposition: "BOTTOM",
        legendborderalpha: "0",
        legendbordercolor: "ffffff",
        legendallowdrag: "0",
        legendshadow: "0",
        hoverFillalpha: "20",
        hovercolor: "#b3ffec",
        showborder: "1"
      },
      colorrange: {
        minvalue: "0",
        startlabel: "Low",
        endlabel: "High",
        code: "#e65c00",
        gradient: "1",
        color: [
          {
            maxvalue: "200000",
            displayvalue: "Average",
            code: "#ffc34d"
          },
          {
            maxvalue: "400000",
            displayvalue: "Above Average",
            code: "#80bfff"
          },
          {
            maxvalue: "600000",
            code: "#00b386"
          }
        ],
        maxvalue: 0
      },
      markers: {
        shapes: [
          {
            id: "myCustomShape",
            type: "image",
            url:
              "https://thumbs.gfycat.com/SomberSomberGermanpinscher-max-1mb.gif",
            xscale: "9",
            yscale: "9",
            labelPadding: "15"
          }
        ],
        items: [
          {
            id: "lon",
            shapeid: "myCustomShape",
            x: "380",
            y: "360",
            tooltext: "Lucknow - Capital of UP",
            labelpos: "left"
          }
        ]
      },
      data: [
        {
          data: [
            {
              id: "019",
              value: "560000"
            },
            {
              id: "011",
              value: "505000"
            },
            {
              id: "018",
              value: "264000"
            },
            {
              id: "010",
              value: "300000"
            },
            {
              id: "001",
              value: "170000"
            },
            {
              id: "032",
              value: "305000"
            },
            {
              id: "024",
              value: "303000"
            },
            {
              id: "025",
              value: "290000"
            },
            {
              id: "030",
              value: "250000"
            },
            {
              id: "008",
              value: "98000"
            },
            {
              id: "009",
              value: "102000"
            },
            {
              id: "027",
              value: "230000"
            },
            {
              id: "006",
              value: "470000"
            },
            {
              id: "015",
              value: "295000"
            },
            {
              id: "014",
              value: "290000"
            },
            {
              id: "013",
              value: "390000"
            },
            {
              id: "034",
              value: "240000"
            },
            {
              id: "033",
              value: "290000",
              link: "newchart-json-UP"
            },
            {
              id: "005",
              value: "245000",
              link: "newchart-json-BR"
            },
            {
              id: "035",
              value: "302000"
            },
            {
              id: "004",
              value: "299000"
            },
            {
              id: "003",
              value: "81200"
            },
            {
              id: "022",
              value: "291000"
            },
            {
              id: "023",
              value: "100000"
            },
            {
              id: "029",
              value: "301000"
            },
            {
              id: "020",
              value: "400000"
            },
            {
              id: "016",
              value: "230000"
            },
            {
              id: "026",
              value: "350000"
            },
            {
              id: "007",
              value: "410000"
            },
            {
              id: "017",
              value: "320000"
            },
            {
              id: "028",
              value: "310000"
            },
            {
              id: "012",
              value: "260000"
            },
            {
              id: "021",
              value: "220000"
            },
            {
              id: "031",
              value: "298000"
            },
            {
              id: "002",
              value: "510000"
            },
            {
              id: "036",
              value: "290000"
            }
          ]
        }
      ],
      linkeddata: [
        {
          id: "UP",
          linkedchart: {
            chart: {
              caption: "UP map",
              entityFillHoverColor: "#E5E5E9",
              showLabels: "1",
              showValues: "1",
              theme: "fusion",
              showBorder: "1",
              bordercolor: "#FFFFFF"
            },
            data: [
              {
                id: "005",
                value: "99",
                color: "#808080"
              },
              {
                id: "023",
                value: "99",
                color: "#CCCCCC"
              },
              {
                id: "024",
                value: "90",
                color: "#FFFF00"
              },
              {
                id: "012",
                value: "96",
                color: "#FF0000"
              },
              {
                id: "018",
                value: "90",
                color: "#838383"
              },
              {
                id: "017",
                value: "228",
                color: "#565656"
              }
            ]
          }
        }
      ]
    };
  }
}
