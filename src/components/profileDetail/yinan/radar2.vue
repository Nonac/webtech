<template>
    <div id="radar2" class="container"> </div>
</template>

<script>
    import echarts from 'echarts/lib/echarts'
    import 'echarts/lib/chart/radar'
    import 'echarts/lib/component/tooltip'
    import 'echarts/lib/component/legend'
    export default {
        name: 'radar-chart2',
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
                            value: [2,2,2,1.8,2,2,2,2.4,3.3,3.3,2.4,2,2.8,3.8,3.2,2.5,2.3,4,2.7,2,2.7,3.7,4],
                            name: 'Skill Level',
                            itemStyle: {normal: {color: '#343A40'}}
                        }
                    ]
                }]
            }
            const chartObj = echarts.init(document.getElementById('radar2'))
            chartObj.setOption(option)
        }
    }
</script>
<style scoped>
    .container{width: 500px;height: 400px;}
</style>
