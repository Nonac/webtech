<template>
    <div id="radar1" class="container"> </div>
</template>

<script>
    import echarts from 'echarts/lib/echarts'
    import 'echarts/lib/chart/radar'
    import 'echarts/lib/component/tooltip'
    import 'echarts/lib/component/legend'
    export default {
        name: 'radar-chart1',
        mounted () {
            const option = {
                tooltip: {},
                radar: {
                    indicator: [
                        {name: 'Simple Design', max: '4'},
                        {name: 'Code Smells', max: '4'},
                        {name: 'Refactoring', max: '4'},
                        {name: 'Testing', max: '4'},
                        {name: 'Non-functional requirements', max: '4'},
                        {name: 'Conflict management', max: '4'},
                        {name: 'respect', max: '4'},
                        {name: 'commitment', max: '4'},
                        {name: 'Space to learn', max: '4'},
                        {name: 'Definition of Done', max: '4'},
                        {name: 'Visibility', max: '4'},
                        {name: 'intentional practice', max: '4'},
                        {name: 'retroflection', max: '4'},
                        {name: 'balance', max: '4'},
                        {name: 'Leadership', max: '4'},
                        {name: 'Communication', max: '4'},
                        {name: 'Collective Ownership', max: '4'},
                        {name: 'learning', max: '4'},
                        {name: 'validating', max: '4'},
                        {name: 'avoiding waste (muda)', max: '4'},
                        {name: 'easy to use/learn', max: '4'},
                        {name: 'vision', max: '4'},
                        {name: 'solves real/valuable problems', max: '4'},
                    ],
                    center: ['50%', '51%']
                },
                series: [{
                    type: 'radar',
                    itemStyle: {normal: {areaStyle: {type: 'default'}}},
                    data: [
                        {
                            value: [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
                            name: 'Skill Level',
                            itemStyle: {normal: {color: '#343A40'}}
                        }
                    ]
                }]
            }
            option.series[0].data[0].value.forEach((item, i, arr) => arr[i] = Math.random() * 4);

            const chartObj = echarts.init(document.getElementById('radar1'))
            chartObj.setOption(option)
        }
    }
</script>
<style scoped>
    .container{width: 500px;height: 400px;}
</style>
