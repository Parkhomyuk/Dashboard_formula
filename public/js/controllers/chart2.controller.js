(function(){

    function chart2Controller (Transactions,$scope) {
        var vm = this;
        vm.title = 'Chart ';

        vm.subtitle2 = 'status of members';

        //SELECT  m.status,   count(m.status) FROM  heroku_81100d486555e91.members m  left join  heroku_81100d486555e91.status s on m.status=s.statusid group by s.status

        Transactions.countStatus().then(function (dataItem) {
            console.log(dataItem.data);
            vm.dataStatus = dataItem.data;
            var height = 200,
                width = 300,
                margin = 10,
                data = [];

            vm.countI = 0;
            for (var i in vm.dataStatus) {
                vm.countI = +vm.countI + vm.dataStatus[i]['count(m.status)'];
            }
            for (var i in vm.dataStatus) {
                var item = {status: "", rate: 0};
                var is = vm.dataStatus[i]['count(m.status)'];
                var is2 = vm.dataStatus[i]['status'];
                item['status'] = is2;
                item['rate'] = ((is / vm.countI) * 100).toFixed(2);
                data.push(item);
            }
            console.log(data);


// функция для получения цветов
            var color = d3.scale.category10();

// задаем радиус
            var radius = Math.min(width - 2 * margin, height - 2 * margin) / 2.5;

// создаем элемент арки с радиусом
            var arc = d3.svg.arc()
                .outerRadius(radius)
                .innerRadius(0);

            var pie = d3.layout.pie()
                .sort(null)
                .value(function (d) {
                    return d.rate;
                });

            var svg = d3.select("#dashboard-area-7").append("svg")
                .attr("class", "axis")
                .attr("width", width)
                .attr("height", height)
                .append("g")
                .attr("transform",
                    "translate(" + (width / 2 ) + "," + (height / 2 ) + ")");
            var g = svg.selectAll(".arc")
                .data(pie(data))
                .enter().append("g")
                .attr("class", "arc");

            g.append("path")
                .attr("d", arc)
                .style("fill", function (d) {
                    return color(d.data.status);
                });

            g.append("text")
                .attr("transform", function (d) {
                    return "translate(" + arc.centroid(d) + ")";
                })
                .style("text-anchor", "middle")
                .text(function (d) {
                    return d.data.rate + "%";
                });

            var legendTable = d3.select("#dashboard-area-7").select("svg").append("g")
                .attr("transform", "translate(5, " + margin + ")")
                .attr("class", "legendTable");

            var legend = legendTable.selectAll(".legend")
                .data(pie(data))
                .enter().append("g")
                .attr("class", "legend")
                .attr("transform", function (d, i) {
                    return "translate(0, " + i * 20 + ")";
                });

            legend.append("rect")
                .attr("x", width - 25)
                .attr("y", 4)
                .attr("width", 10)
                .attr("height", 10)
                .style("fill", function (d) {
                    return color(d.data.status);
                });

            legend.append("text")
                .attr("x", width - 70)
                .attr("y", 19)
                .attr("dy", ".10em")
                .style("text-anchor", "down")
                .text(function (d) {
                    return d.data.status;
                });


        })
    }


    angular.module('formula')
        .controller('chart2Controller', ['Transactions','$http','$scope',chart2Controller]);

})()