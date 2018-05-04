<?php
/**
 * Created by PhpStorm.
 * User: jashka
 * Date: 03.05.18
 * Time: 17:18
 */

namespace App\Mail\Admin;


use App\Mail\EmailNotificationInterface;
use App\Mail\Mailer;

class InviteAdmin implements EmailNotificationInterface
{
    /**
     * @var Mailer
     */
    private $mailer;

    public function __construct(Mailer $mailer)
    {
        $this->mailer = $mailer;
    }

    public function send(array $data)
    {
        $this->mailer->send($data, 'emails.invite_admin', 'Приглашение к участию');
    }
}