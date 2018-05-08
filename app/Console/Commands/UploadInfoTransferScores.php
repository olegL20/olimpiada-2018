<?php

namespace App\Console\Commands;


use App\Model\InfoTransferScore;
use Illuminate\Console\Command;

class UploadInfoTransferScores extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'upload:info_scores';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';
    /**
     * @var InfoTransferScore
     */
    private $score;

    protected $delimiter = ':';

    /**
     * Create a new command instance.
     *
     * @param InfoTransferScore $score
     */
    public function __construct(InfoTransferScore $score)
    {
        parent::__construct();

        $this->score = $score;

        $this->score->truncate();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $file = storage_path('app/info_transfer_scores.csv');

        $bar = $bar = $this->output->createProgressBar($this->getCountLines($file));

        if (($handle = fopen($file, 'r')) !== FALSE) {
            while (($data = fgetcsv($handle, 1000, ',')) !== FALSE) {
                $num = count($data);

                for ($c = 0; $c < $num; $c++) {
                    $line = $data[$c];
                    if (strpos($data[$c], $this->delimiter)) {
                        list($score, $value) = explode($this->delimiter, $line);
                        $this->addScore($score, $value);
                        $bar->advance();
                        $this->info('Add score: ' . $score);
                    }
                }
            }
            fclose($handle);
        }

        $bar->finish();
    }

    protected function addScore($score, $value)
    {
        $this->score->create([
            'score_school' => $score,
            'score_related' => $value,
        ]);
    }

    protected function getCountLines($file)
    {
        $linecount = 0;
        $handle = fopen($file, "r");
        while (!feof($handle)) {
            $line = fgets($handle, 4096);
            $linecount = $linecount + substr_count($line, PHP_EOL);
        }

        fclose($handle);

        return $linecount;
    }
}
