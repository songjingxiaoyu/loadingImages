/*
 * @Author: your name
 * @Date: 2020-10-21 10:31:19
 * @LastEditTime: 2020-10-21 12:11:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /loading-more-example/Users/xiaoyu/WebstormProjects/learn/my-app/interfaces/loadingMore.ts
 */

export type loadingType={
    loadText:string,//加载的文字
    loadNext:Function,//加载下一页触发的函数方法
    data:any,
    itemComponent:any,
}