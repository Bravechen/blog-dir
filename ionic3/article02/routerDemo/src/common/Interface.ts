/**
 * 轮播图数据接口
 */
export interface ISlideData{
    index:number,        //图片索引
    title:string,        //图片标题
    imgURL:string,       //图片url地址
}
/**
 * 推荐列表主题数据接口
 */
export interface ISubject{
    title:string,
    icon:number,
    appList:IAppInfo[]
}
/**
 * App信息数据接口
 */
export interface IAppInfo{
    appId:string,               //应用id
    appName:string,             //应用名称
    downloadURL?:string,         //下载地址
    size:string,                //应用大小
    companyName?:string,         //公司名称
    icon:string,                //应用logo图片地址
    version?:string,             //应用的版本
    status?:string,              //应用当前状态
    packageName?:string,         //应用的包名
    shortdes?:string,
    extension?:number,
    //isChecked:boolean,          //是否被检查过本机安装情况，默认false
}
export interface IArticleData{
    title:string,
    id:string,
    picture?:string,
    author?:string,
    amount?:number,
    authorId?:string,
}
/**
 * 应用场景推荐列表和深度评测列表中的单项数据接口
 */
export interface IRecItemData extends IArticleData{
    state:number,
    prompt?:string,
}
/**
 * 教师用户信息
 */
export interface ITeacherInfo{
    userName:string,
    teachId:string,
    avatar:string,
}
