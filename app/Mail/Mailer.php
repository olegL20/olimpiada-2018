<?php
/**
 * Created by PhpStorm.
 * User: jashka
 * Date: 26.04.18
 * Time: 16:00
 */

namespace App\Mail;


use Illuminate\Mail\Mailer as LaravelMailer;
use Illuminate\Mail\Message;

class Mailer
{
    /**
     * @var \Illuminate\Mail\Mailer
     */
    private $mailer;

    public function __construct(LaravelMailer $mail)
    {
        $this->mailer = $mail;
    }

    public function send($data, $view, $subject)
    {
        $this->mailer->send($view, compact('data'), function (Message $message) use ($data, $subject) {
            $message->from(config('mail.from.address'), config('app.name'));
            $message->to($data['email'], $data['name'])->subject($subject);
        });
    }
}