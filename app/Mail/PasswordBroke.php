<?php
/**
 * Created by PhpStorm.
 * User: jashka
 * Date: 18.06.17
 * Time: 8:30
 */

namespace App\Mail;


/**
 * Class Confirmation
 * @package App\Mail
 */
class PasswordBroke implements EmailNotificationInterface
{

    /**
     * @var Mailer
     */
    private $mailer;

    public function __construct(Mailer $mailer)
    {
        $this->mailer = $mailer;
    }

    public function send(array $user)
    {
        $this->mailer->send($user, 'emails.password_broker', 'Восстановление пароля');
    }
}