---
title: PHP常用封装
tags:
  - PHP
  - 笔记
category:
  - PHP
abbrlink: 3070531670
date: 2022-10-19 16:14:35
---

### 常用封装



```php
// config下的文件：status

return [
    // 请求成功
    'success' => 200,
    // 未登录
    'not_logged' => 401,
    // 没有权限访问
    'not_permission' => 403,
    // 服务器内部错误
    'error' => 500,
];


```



```php
/**
 * 打印调试函数 html
 * @param $content
 * @param bool $export
 */
function pre($content, bool $export = false)
{
    $output = $export ? var_export($content, true) : print_r($content, true);
    echo "<pre>{$output}</pre>";
    app_end();
}
```

```php
/**
 * 打印调试函数 json
 * @param $content
 * @param bool $export
 * @throws DebugException
 */
function pree($content, bool $export = false)
{
    $output = $export ? var_export($content, true) : $content;
    throw new DebugException([], $output);
}
```



```php
/**
 * 输出错误信息
 * @param string $message 报错信息
 * @param int|null $status 状态码,默认为配置文件status.error
 * @param array $data 附加数据
 * @throws BaseException
 */

use cores\exception\BaseException;

function throwError(string $message, ?int $status = null, array $data = [])
{
    is_null($status) && $status = config('status.error');
    throw new BaseException(['status' => $status, 'message' => $message, 'data' => $data]);
}

*******************************************************************************
/**
 * 自定义异常类的基类
 * Class BaseException
 * @package cores\exception
 */
class BaseException extends Exception
{
    // 状态码
    public $status;

    // 错误信息
    public $message = '';

    // 输出的数据
    public $data = [];

    /**
     * 构造函数，接收一个关联数组
     * @param array $params 关联数组只应包含status、msg、data，且不应该是空值
     */
    public function __construct($params = [])
    {
        parent::__construct();
        $this->status = $params['status'] ?? config('status.error');
        $this->message = $params['message'] ?? '很抱歉，服务器内部错误';
        $this->data = $params['data'] ?? [];
    }
}
```



```php
/**
 * 获取当前域名及根路径
 * @return string
 */
function base_url(): string
{
    static $baseUrl = '';
    if (empty($baseUrl)) {
        $request = Request::instance();
        // url协议，设置强制https或自动获取
        $scheme = Config::get('route')['url_force_https'] ? 'https' : $request->scheme();
        // url子目录
        $rootUrl = root_url();
        // 拼接完整url
        $baseUrl = "{$scheme}://" . $request->host() . $rootUrl;
    }
    return $baseUrl;
}
```

```php
/**
 * 获取当前uploads目录访问地址
 * @return string
 * public底下的uploads文件夹  一般用于存储文件 照片
 */
function uploads_url(): string
{
    return base_url() . 'uploads';
}
```

```php
/**
 * 时间戳转换日期
 * @param int|string $timeStamp 时间戳
 * @param bool $withTime 是否关联时间
 * @return false|string
 */
function format_time($timeStamp, bool $withTime = true)
{
    $format = 'Y-m-d';
    $withTime && $format .= ' H:i:s';
    return $timeStamp ? date($format, $timeStamp) : '';
}
```

```php
/**
 * 隐藏手机号中间四位 13012345678 -> 130****5678
 * @param string $mobile 手机号
 * @return string
 */
function hide_mobile(string $mobile): string
{
    return substr_replace($mobile, '****', 3, 4);
}
```

```php
/**
 * 格式化起止时间(为了兼容前端RangePicker组件)
 * 2020-04-01T08:15:08.891Z => 1585670400
 * @param array $times
 * @return array
 */
function between_time(array $times)
{
    foreach ($times as &$time) {
        $time = trim($time, '&quot;');
        $time = str2time_date($time);
    }
    return ['start_time' => current($times), 'end_time' => next($times)];
}
```



### 验证器



```php
/**
 * 验证类：银行卡验证
 * Class Card
 * @package app\api\validate\user
 */
class Card extends Validate
{
    /**
     * 银行卡信息规则
     * @var string[][]
     */
    protected $rule = [
        'name' => ['require', 'chs', 'min:2'],
        'cardNo' => ['require', 'number', 'length:14,19'],
    ];

    /**
     * 验证提示
     * @var string[]
     */
    protected $message = [
        'name.require' => '姓名未填写',
        'name.chs' => '姓名必须是中文',
        'name.min' => '姓名最少两个汉字',
        'cardNo.require' => '银行卡号必须填写',
        'cardNo.number' => '银行卡必须是纯数字',
        'cardNo.length' => '银行卡输入长度不正确'
    ];

    /**
     * 验证场景
     * @var string[][]
     */
    protected $scene = [
        'addCard' => ['name', 'cardNo']
    ];
}

/**
* 调用方法
*/
use app\api\validate\user\Card as ValidateCard;

public function add(array $data){
    $this->validata($data);
}
public function validata(array $data){
    $validate = new ValidateCard;
    if (!$validate->scene('addCard')->check($data)) {
        // throwError为自行封装函数 调用返回错误信息后结束任务
        throwError($validate->getError());
    }
}
```
