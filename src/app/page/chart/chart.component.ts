import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor() { }


  data = [
    [
      "Tiger Nixon",
      "System Architect",
      "Top",
      "Tiger Nixon",
      "System Architect",
      "Top"
    ],
    [
      "Garrett Winters",
      "Director",
      "Tiger Nixon",
      "Tiger Nixon",
      "System Architect",
      "Top"
    ], [
      "Tiger Nixon",
      "System Architect",
      "Top",
      "Tiger Nixon",
      "System Architect",
      "Top"
    ],
    [
      "Garrett Winters",
      "Director",
      "Tiger Nixon",
      "Tiger Nixon",
      "System Architect",
      "Top"
    ], [
      "Tiger Nixon",
      "System Architect",
      "Top",
      "Tiger Nixon",
      "System Architect",
      "Top"
    ],
    [
      "Garrett Winters",
      "Director",
      "Tiger Nixon",
      "Tiger Nixon",
      "System Architect",
      "Top"
    ], [
      "Tiger Nixon",
      "System Architect",
      "Top",
      "Tiger Nixon",
      "System Architect",
      "Top"
    ],
    [
      "Garrett Winters",
      "Director",
      "Tiger Nixon",
      "Tiger Nixon",
      "System Architect",
      "Top"
    ], [
      "Tiger Nixon",
      "System Architect",
      "Top",
      "Tiger Nixon",
      "System Architect",
      "Top"
    ],
    [
      "Garrett Winters",
      "Director",
      "Tiger Nixon",
      "Tiger Nixon",
      "System Architect",
      "Top"
    ], [
      "Tiger Nixon",
      "System Architect",
      "Top",
      "Tiger Nixon",
      "System Architect",
      "Top"
    ],
    [
      "Garrett Winters",
      "Director",
      "Tiger Nixon",
      "Tiger Nixon",
      "System Architect",
      "Top"
    ], [
      "Tiger Nixon",
      "System Architect",
      "Top",
      "Tiger Nixon",
      "System Architect",
      "Top"
    ],
    [
      "Garrett Winters",
      "Director",
      "Tiger Nixon",
      "Tiger Nixon",
      "System Architect",
      "Top"
    ], [
      "Tiger Nixon",
      "System Architect",
      "Top",
      "Tiger Nixon",
      "System Architect",
      "Top"
    ],
    [
      "Garrett Winters",
      "Director",
      "Tiger Nixon",
      "Tiger Nixon",
      "System Architect",
      "Top"
    ], [
      "Tiger Nixon",
      "System Architect",
      "Top",
      "Tiger Nixon",
      "System Architect",
      "Top"
    ],
    [
      "Garrett Winters",
      "Director",
      "Tiger Nixon",
      "Tiger Nixon",
      "System Architect",
      "Top"
    ], [
      "Tiger Nixon",
      "System Architect",
      "Top",
      "Tiger Nixon",
      "System Architect",
      "Top"
    ],
    [
      "Garrett Winters",
      "Director",
      "Tiger Nixon",
      "Tiger Nixon",
      "System Architect",
      "Top"
    ], [
      "Tiger Nixon",
      "System Architect",
      "Top",
      "Tiger Nixon",
      "System Architect",
      "Top"
    ],
    [
      "Garrett Winters",
      "Director",
      "Tiger Nixon",
      "Tiger Nixon",
      "System Architect",
      "Top"
    ], [
      "Tiger Nixon",
      "System Architect",
      "Top",
      "Tiger Nixon",
      "System Architect",
      "Top"
    ],
    [
      "Garrett Winters",
      "Director",
      "Tiger Nixon",
      "Tiger Nixon",
      "System Architect",
      "Top"
    ], [
      "Tiger Nixon",
      "System Architect",
      "Top",
      "Tiger Nixon",
      "System Architect",
      "Top"
    ],
    [
      "Garrett Winters",
      "Director",
      "Tiger Nixon",
      "Tiger Nixon",
      "System Architect",
      "Top"
    ], [
      "Tiger Nixon",
      "System Architect",
      "Top",
      "Tiger Nixon",
      "System Architect",
      "Top"
    ],
    [
      "Garrett Winters",
      "Director",
      "Tiger Nixon",
      "Tiger Nixon",
      "System Architect",
      "Top"
    ], [
      "Tiger Nixon",
      "System Architect",
      "Top",
      "Tiger Nixon",
      "System Architect",
      "Top"
    ],
    [
      "Garrett Winters",
      "Director",
      "Tiger Nixon",
      "Tiger Nixon",
      "System Architect",
      "Top"
    ], [
      "Tiger Nixon",
      "System Architect",
      "Top",
      "Tiger Nixon",
      "System Architect",
      "Top"
    ],
    [
      "Garrett Winters",
      "Director",
      "Tiger Nixon",
      "Tiger Nixon",
      "System Architect",
      "Top"
    ], [
      "Tiger Nixon",
      "System Architect",
      "Top",
      "Tiger Nixon",
      "System Architect",
      "Top"
    ],
    [
      "Garrett Winters",
      "Director",
      "Tiger Nixon",
      "Tiger Nixon",
      "System Architect",
      "Top"
    ], [
      "Tiger Nixon",
      "System Architect",
      "Top",
      "Tiger Nixon",
      "System Architect",
      "Top"
    ],
    [
      "Garrett Winters",
      "Director",
      "Tiger Nixon",
      "Tiger Nixon",
      "System Architect",
      "Top"
    ], [
      "Tiger Nixon",
      "System Architect",
      "Top",
      "Tiger Nixon",
      "System Architect",
      "Top"
    ],
    [
      "Garrett Winters",
      "Director",
      "Tiger Nixon",
      "Tiger Nixon",
      "System Architect",
      "Top"
    ], [
      "Tiger Nixon",
      "System Architect",
      "Top",
      "Tiger Nixon",
      "System Architect",
      "Top"
    ],
    [
      "Garrett Winters",
      "Director",
      "Tiger Nixon",
      "Tiger Nixon",
      "System Architect",
      "Top"
    ],
  ]


  ngOnInit() {
    $('#example').DataTable({
      "scrollX": true,
      data: this.data
    });
  }

}
