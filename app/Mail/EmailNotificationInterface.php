<?php
/**
 * Created by PhpStorm.
 * User: jashka
 * Date: 26.04.18
 * Time: 16:04
 */

namespace App\Mail;


interface EmailNotificationInterface
{
    public function send(array $data);
}