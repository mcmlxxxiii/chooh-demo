# -*- coding: utf-8 -*-


import os
import shutil

from support import js_bundler


js_bundle_source_path = os.path.join(ddoc_dir, '_attachments/js/chooh-demo.bundle.js')
js_bundle_target_path = os.path.join(ddoc_dir, '_attachments/bundle.js')

js_bundler.bundle(js_bundle_source_path, js_bundle_target_path)

os.remove(js_bundle_source_path)

shutil.rmtree(os.path.join(ddoc_dir, '_attachments/js/app'))
shutil.rmtree(os.path.join(ddoc_dir, '_attachments/js/util'))
shutil.rmtree(os.path.join(ddoc_dir, '_attachments/js/vendor'))
