Polymer('example-app', {
  published: {
    bootstrap: {}
  },
  data: null,
  dataAsString: 'null',
  currentPage: 0,
  currentImage: '/2014 - 1.jpg',
  hideImageControls: true,
  ready: function() {
    console.log(this.bootstrap);
    this.data = JSON.parse(this.bootstrap);
  },
  dataChanged: function() {
    this.dataAsString = JSON.stringify(this.data);
  },
  togglePreview: function() {
    this.$.pager.selected = this.currentPage = (this.currentPage + 1) % 2;
    this.currentPage == 1 && (this.hideImageControls = true);
  },
  toggleImageControls: function(event) {
    event.stopPropagation();
    this.hideImageControls = !this.hideImageControls;
  }
});
