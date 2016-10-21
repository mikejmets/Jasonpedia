{
  "$jason": {
    "head": {
      "title": "Javascript",
      "actions": {
        "$load": {
          "type": "$geo.get",
          "options": {
            "distance": "100"
          },
          "success": {
            "type": "$render"
          }
        }
      },
      "templates": {
        "body": {
          "header": {
            "title": "Simple Javascript",
            "menu": {
              "text": "View JSON",
              "href": {
                "url": "https://github.com/Jasonette/Jasonpedia/blob/gh-pages/template/js.json",
                "view": "web"
              }
            }
          },
          "sections": [{
            "header": {
              "type": "label",
              "text": "This time, a bit more complex Javascript. We will implement an entire function",
              "style": {
                "background": "#f5f5f5",
                "padding": "20"
              }
            },
            "items": [{
              "type": "vertical",
              "style": {
                "spacing": "5"
              },
              "components": [{
                "type": "label",
                "text": "Let's try a function with a for loop"
              }, {
                "type": "label",
                "style": {
                  "background": "#282828",
                  "corner_radius": "3",
                  "color": "#c5d3d8",
                  "padding": "10",
                  "size": "12",
                  "font": "Courier"
                },
                "text": "var items=[]; for(var i=0; i<10; i++){items.push(i);} return JSON.stringify(items);"
              }]
            }, {
              "type": "vertical",
              "style": {
                "spacing": "5"
              },
              "components": [{
                "type": "label",
                "text": "Evaluated Result",
                "style": {
                  "font": "HelveticaNeue-Bold",
                  "size": "12"
                }
              }, {
                "type": "label",
                "style": {
                  "background": "#282828",
                  "corner_radius": "3",
                  "color": "#c5d3d8",
                  "padding": "10",
                  "size": "12",
                  "font": "Courier"
                },
                "text": "{{var items=[]; for(var i=0; i<10; i++){items.push(i);} return JSON.stringify(items);}}"
              }, {
                "type": "label",
                "text": "View JSON to see the actual javascript expression that evaluated to below:"
              }]
            }]
          }]
        }
      }
    }
  }
}
