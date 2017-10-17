(function(){

    function chartController (Transactions,$scope){
         var vm = this;
        vm.title= 'Chart ';
        vm.subtitle= 'number of registered users by date';
        vm.subtitle2= 'status of members';

        var height = 200,
            width = 600,
            margin=30,

        axisWidth = width - 2 * margin;
        Transactions.countMembersByDate().then(function(dataItem){
             console.log(JSON.stringify(dataItem));
             var data=[],
                rawData=[];

            for(var i in dataItem.data){
                var item={x:1,y:2};
                var d= new Date(dataItem.data[i]['date']);
                var d1=new Date(d.getFullYear(),d.getMonth(),d.getDate());

                item.x= d;

                item.y=dataItem.data[i]['count(date)'];
                rawData.push(item);
            }
            console.log(rawData);


/*myql request* SELECT  date,   count(date) FROM heroku_81100d486555e91.members
 GROUP BY DATE(date);*/


        var svg = d3.select("#dashboard-area-6").append("svg")
            .attr("class", "axis")
            .attr("width", width)
            .attr("height", height);

// длина оси X= ширина контейнера svg - отступ слева и справа
        var xAxisLength = width - 2 * margin;

// длина оси Y = высота контейнера svg - отступ сверху и снизу
        var yAxisLength = height - 2 * margin;

// функция интерполяции значений на ось Х
        /*var scaleX = d3.scale.linear()
            .domain([0, 100])
            .range([0, xAxisLength]);*/
        var scaleX = d3.time.scale() // от 1 января 2015 года до текущей даты
           /* .domain([new Date(rawData[0].x.getFullYear(),rawData[0].x.getMonth(),rawData[0].x.getDate()), new Date(rawData[rawData.length-1].x.getFullYear(),rawData[rawData.length-1].x.getMonth(),rawData[rawData.length-1].x.getDate())])*/
            .domain([rawData[0].x,rawData[rawData.length-1].x])
            .range([0, axisWidth]);

// функция интерполяции значений на ось Y
        var scaleY = d3.scale.linear()
            .domain([10, 0])
            .range([0, yAxisLength]);

        for(i=0; i<rawData.length; i++)
            data.push({x: scaleX(rawData[i].x)+margin, y: scaleY(rawData[i].y) + margin});


// создаем ось X
        var xAxis = d3.svg.axis()
            .scale(scaleX)
            .orient("bottom")
            .tickFormat(d3.time.format('%d.%m'));
// создаем ось Y
        var yAxis = d3.svg.axis()
            .scale(scaleY)
            .orient("left");

        // отрисовка оси Х
        svg.append("g")
            .attr("class", "x-axis")
            .attr("transform",  // сдвиг оси вниз и вправо
                "translate(" + margin + "," + (height - margin) + ")")
            .call(xAxis);

        // отрисовка оси Y
        svg.append("g")
            .attr("class", "y-axis")
            .attr("transform", // сдвиг оси вниз и вправо на margin
                "translate(" + margin + "," + margin + ")")
            .call(yAxis);

// создаем набор вертикальных линий для сетки
        d3.selectAll("g.x-axis g.tick")
            .append("line") // добавляем линию
            .classed("grid-line", true) // добавляем класс
            .attr("x1", 0)
            .attr("y1", 0)
            .attr("x2", 0)
            .attr("y2", - (height - 2 * margin));

// рисуем горизонтальные линии
        d3.selectAll("g.y-axis g.tick")
            .append("line")
            .classed("grid-line", true)
            .attr("x1", 0)
            .attr("y1", 0)
            .attr("x2", xAxisLength)
            .attr("y2", 0);

// функция, создающая по массиву точек линии
        var line = d3.svg.line()
            .x(function(d){return d.x;})
            .y(function(d){return d.y;});

        var g = svg.append("g");
        g.append("path")
            .attr("d", line(data))
            .style("stroke", "#1caf9a")
            .style("stroke-width", 2);
// добавляем заголовок
       /* g.append("text")
            .attr("x", (width / 2))
            .attr("y", margin - 10 )
            .attr("text-anchor", "middle")
            .style("font-size", "22px")
            .text("number of registered users by date");*/

        g.append("text")
            .attr("x", margin + 11)
            .attr("y", margin - 11)
            .attr("text-anchor", "end")
            .style("font-size", "11px")
            .text("users");

        g.append("text")
            .attr("x", width - margin + 11)
            .attr("y", height - margin - 5)
            .attr("text-anchor", "end")
            .style("font-size", "11px")
            .text("date");
// добавляем отметки к точкам
        svg.selectAll(".dot")
            .data(rawData)
            .enter().append("circle")
            .attr("class", "dot")
            .attr("r", 3.5)
            .attr("cx", function(d) { return scaleX(d.x)+margin; })
            .attr("cy", function(d) { return scaleY(d.y)+margin; });

        });
    }



    angular.module('formula')
        .controller('chartController', ['Transactions','$http','$scope',chartController]);

})()