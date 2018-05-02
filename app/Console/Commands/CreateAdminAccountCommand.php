<?php

namespace App\Console\Commands;

use App\Model\User;
use Illuminate\Console\Command;

class CreateAdminAccountCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'itpm:admin';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        User::where('role', User::GLOBAL_ADMIN)->delete();

        $str = str_random(8);
        $email = $str . '@gmail.com';
        $password = bcrypt($str);

        $user = new User();
        $user->name = 'Admin';
        $user->email = $email;
        $user->password = $password;
        $user->surname = 'Admin';
        $user->role = User::GLOBAL_ADMIN;
        $user->birthday = '2018-05-05';
        $user->extramula = User::DAY_FORM;
        $user->confirmed = true;
        $user->save();

        $this->info('Admin data: email: ' . $email . 'password: ' . $str);
    }
}
