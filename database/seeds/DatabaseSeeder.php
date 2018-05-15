<?php

use App\Model\University;
use App\Model\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($id = 1; $id < 11; $id++) {
            $field = University::find($id);

            if (is_null($field)) {
                $field = new University();
                $field->name = 'university' . $id;
                $field->position = "{'lat': 31.123981293, 'lng': 30.12381233}";
                $field->description = 'description' . $id;
                $field->address = 'address'.$id;
                $field->zip_code = '1000'.$id;
                $field->email = 'university'.$id.'@gmail.com';
                $field->phone = rand(1000000000,9999999999);
                $field->site = 'university-site'.$id.'.com';
                $field->save();
            }
        }

            for ($id = 1; $id < 3; $id++) {
            $field = User::find($id);

            if (is_null($field)) {
                $field = new User();
                $field->name = 'name' . $id;
                $field->surname = 'surname' . $id;
                $field->email = 'user' . $id . '@gmail.com';
                $field->password = bcrypt('12345678');
                $field->role = 'user';
                $field->confirmed = true;
                $field->university_id = 1;
                $field->save();
            }
        }

        for ($id = 3; $id < 6; $id++) {
            $field = User::find($id);

            if (is_null($field)) {
                $field = new User();
                $field->name = 'uni_admin' . $id;
                $field->surname = 'uni_admin' . $id;
                $field->email = 'uni_admin' . $id . '@gmail.com';
                $field->password = bcrypt('12345678');
                $field->role = 'uni_admin';
                $field->confirmed = true;
                $field->university_id = 2;
                $field->save();
            }
        }

        $field = User::find($id = 6);

        if (is_null($field)) {
            $field = new User();
            $field->name = 'global_admin' . $id;
            $field->surname = 'global_admin' . $id;
            $field->email = 'global_admin' . $id . '@gmail.com';
            $field->password = bcrypt('12345678');
            $field->role = 'global_admin';
            $field->confirmed = true;
            $field->save();
        }
    }
}
