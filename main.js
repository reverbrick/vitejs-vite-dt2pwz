export default {
  layout: {
    name: 'layout',
    padding: 0,
    panels: [
      { type: 'left', size: 200, resizable: true, minSize: 120 },
      { type: 'main', minSize: 550, overflow: 'hidden' },
    ],
  },

  sidebar: {
    name: 'sidebar',
    nodes: [
      {
        id: 'general',
        text: 'General',
        group: true,
        expanded: true,
        nodes: [
          {
            id: 'grid1',
            text: 'Grid 1',
            icon: 'fa fa-pencil-square-o',
            selected: true,
          },
          { id: 'grid2', text: 'Grid 2', icon: 'fa fa-pencil-square-o' },
          { id: 'html', text: 'Some HTML', icon: 'fa fa-list-alt' },
        ],
      },
    ],
    onClick(event) {
      switch (event.target) {
        case 'grid1':
          app.w2ui.layout.html('main', app.w2ui.grid1);
          break;
        case 'grid2':
          app.w2ui.layout.html('main', app.w2ui.grid2);
          break;
        case 'html':
          app.w2ui.layout.html(
            'main',
            '<div style="padding: 10px">Some HTML</div>'
          );
          $(app.w2ui.layout.el('main')).removeClass('w2ui-grid').css({
            'border-left': '1px solid #efefef',
          });
          break;
      }
    },
  },

  grid1: {
    name: 'grid1',
    url: 'http://localhost:3000/metalwit_zlecenia?select=indeks%2Cilosc%2Cmetalwit_maszyny(id%2Cindeks%2Cmaszyna)',
    limit: 20,
    dataType: 'RESTFULL',
    show: {
      footer: true,
    },
    columns: [
      { field: 'indeks', text: 'Indeks', size: '180px' },
      { field: 'metalwit_maszyny.maszyna', text: 'Maszyna', size: '180px' },
      { field: 'email', text: 'Email', size: '40%' },
      { field: 'sdate', text: 'Start Date', size: '120px' },
    ],
  },

  grid2: {
    name: 'grid2',
    columns: [
      { field: 'state', text: 'State', size: '80px' },
      { field: 'title', text: 'Title', size: '100%' },
      {
        field: 'priority',
        text: 'Priority',
        size: '80px',
        attr: 'align="center"',
      },
    ],
    records: [
      {
        recid: 1,
        state: 'Open',
        title: 'Short title for the record',
        priority: 2,
      },
      {
        recid: 2,
        state: 'Open',
        title: 'Short title for the record',
        priority: 3,
      },
      {
        recid: 3,
        state: 'Closed',
        title: 'Short title for the record',
        priority: 1,
      },
    ],
  },
};
