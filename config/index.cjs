/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  //USE_PASSAGE: 'push-deer',
  USE_PASSAGE: 'push-plus',
  // 使用微信测试号：公众号APP_ID
  APP_ID: '',//wx0aa00332916c32c4

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '',//3842a992137c9c7622dc910df6093025

  PROVINCE: '',
  CITY: '',

  USERS: [
    {
      // 想要发送的人的名字
      name: '媛媛子',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      
      id: '9eeb0a3d33594bf6afdeb5a2d2b8257e',//董:260926c919e346da9deca11f59f42c2e,媛媛子:9eeb0a3d33594bf6afdeb5a2d2b8257e
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '0001',//Ase9PNxj78l6dfsCIMdfRRFfwjQtCHrXjBpEq9NbhaY
      // 所在省份或城市，也可以不填
      province: '湖南',
      // 所在城市或县区
      city: '衡阳',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-28',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        // {
        //   type: '*生日', name: '宝贝', year: '1996', date: '09-09',
        // },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '媛媛子', year: '1995', date: '12-28',
        },
        {
          type: '节日', name: '相识纪念日', year: '2021', date: '01-01',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2021-01-01' },
        // // 结婚纪念日
        // { keyword: 'marry_day', date: '2022-09-09' },
      ],
     
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
    }
  ],

}

module.exports = USER_CONFIG

