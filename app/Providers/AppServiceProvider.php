<?php

namespace App\Providers;


use App\Model\Asset;
use App\Model\Faculty;
use App\Model\Major;
use App\Model\University;
use App\Model\User;
use App\Observer\AssetObserver;
use Illuminate\Support\ServiceProvider;
use Illuminate\Database\Eloquent\Relations\Relation;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Asset::observe(AssetObserver::class);
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        Relation::morphMap([
            'user'    => User::class,
            'faculty'  => Faculty::class,
            'major'  => Major::class,
            'university'  => University::class,
        ]);
    }
}
