<?php

namespace Drupal\Tests\system\Functional\Database;

use Drupal\KernelTests\Core\Database\DatabaseTestBase as DatabaseKernelTestBase;
use Drupal\Tests\BrowserTestBase;

/**
 * Base class for databases database tests.
 */
abstract class DatabaseTestBase extends BrowserTestBase {

  /**
   * {@inheritdoc}
   */
  protected static $modules = ['database_test'];

  /**
   * {@inheritdoc}
   */
  protected function setUp(): void {
    parent::setUp();

    DatabaseKernelTestBase::addSampleData();
  }

}
