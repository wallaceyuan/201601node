/**
 * Created by Yuan on 2016/4/2.
 */
var CronJob = require('cron').CronJob;
var job = new CronJob('*/5 * * * * *',function(){
    console.log('每5秒执行一次');
});
job.start();