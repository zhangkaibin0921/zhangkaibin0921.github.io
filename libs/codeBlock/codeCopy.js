$(function () {
    var $copyIcon = $('<i class="fa fa-copy code_copy" title="���ƴ���" aria-hidden="true"></i>');
    $('.code-area').prepend($copyIcon);
new ClipboardJS('.fa-copy', {
    target: function (trigger) {
        return trigger.nextElementSibling;
    }
});

});
��������������������������������
��Ȩ����������ΪCSDN������feezxe����ԭ�����£���ѭCC 4.0 BY-SA��ȨЭ�飬ת���븽��ԭ�ĳ������Ӽ���������
ԭ�����ӣ�https://blog.csdn.net/weixin_45682081/article/details/105992558